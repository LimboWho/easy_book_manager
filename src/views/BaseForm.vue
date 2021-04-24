<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-calendar"></i> 上传
                </el-breadcrumb-item>
                <el-breadcrumb-item>上传商品</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="form-box">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="商品名称" prop="goodsname">
                        <el-input v-model="form.goodsname"></el-input>
                    </el-form-item>
                     <el-form-item label="商品价格"  prop="sellingprice">
                        <el-input v-model="form.sellingprice" type="number" ></el-input>
                    </el-form-item>
                    <el-form-item label="商品简介" prop="goodsintro">
                        <el-input type="textarea" rows="5" v-model="form.goodsintro"></el-input>
                    </el-form-item>
                    <el-form-item label="商品图">
                        <el-upload
                            ref="upload"
                            :limit="3"
                            :auto-upload="false"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            list-type="picture-card"
                            :file-list="fileList"
                            :on-change="getFile"
                            :on-preview="handlePictureCardPreview"
                            :on-remove="handleRemove">
                            <i class="el-icon-plus"></i>
                            </el-upload>
                            <el-dialog >
                            <img width="100%" :src="dialogImageUrl" alt="">
                        </el-dialog>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">提交</el-button>
                        <el-button @click="noSumit">取消</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>

import {postGood} from '@/api/goods'

export default {
    name: 'baseform',
    data() {
        return {
            options: [
                {
                    value: 'guangdong',
                    label: '广东省',
                    children: [
                        {
                            value: 'guangzhou',
                            label: '广州市',
                            children: [
                                {
                                    value: 'tianhe',
                                    label: '天河区'
                                },
                                {
                                    value: 'haizhu',
                                    label: '海珠区'
                                }
                            ]
                        },
                        {
                            value: 'dongguan',
                            label: '东莞市',
                            children: [
                                {
                                    value: 'changan',
                                    label: '长安镇'
                                },
                                {
                                    value: 'humen',
                                    label: '虎门镇'
                                }
                            ]
                        }
                    ]
                },
                {
                    value: 'hunan',
                    label: '湖南省',
                    children: [
                        {
                            value: 'changsha',
                            label: '长沙市',
                            children: [
                                {
                                    value: 'yuelu',
                                    label: '岳麓区'
                                }
                            ]
                        }
                    ]
                }
            ],
            form: {
                goodsid:"",
                merchantsid:"1",
                goodsname:"",
                goodsintro:"",
                goodscategoryid:8,
                goodscoverimg1:"",
                goodscoverimg2:"",
                goodscoverimg3:"",
                goodscarousel:"",
                originalprice:"",
                sellingprice:"",
                stocknum:"",
                tag:"",
                goodssellstatus:1,
                // createuser:"",
                // createtime:"",
                // updateuser:"",
                // updatetime:"",
                goodsdetailcontent:"",
            },
            dialogImageUrl: '',
            dialogVisible: false,
            fileList:[],
            base64List:[]
        };
    },
    methods: {
        onSubmit() {

            this.form.goodscoverimg1=this.base64List[0]?this.base64List[0]:"";
            this.form.goodscoverimg2=this.base64List[1]?this.base64List[1]:"";
            this.form.goodscoverimg3=this.base64List[2]?this.base64List[2]:"";

            postGood(this.form).then(res=>{
                console.log(res)
                this.$message.success('提交成功！');
                this.$refs.form.resetFields();
                this.$refs.upload.clearFiles();
                this.fileList=[];
                this.base64List=[];
            })
            
        },

        noSumit(){
            console.log("取消")
            this.$refs.form.resetFields();
            this.$refs.upload.clearFiles();
            this.fileList=[];
            this.base64List=[];
        },


        getFile(file, fileList) {
            console.log(file,fileList);
            this.getBase64(file.raw).then(res => {
                this.base64List.push(res)
                 console.log("this.base64List",this.base64List)
            });
        },
        getBase64(file) {
            return new Promise(function(resolve, reject) {
            let reader = new FileReader();
            let imgResult = "";
            reader.readAsDataURL(file);
            reader.onload = function() {
                imgResult = reader.result;
            };
            reader.onerror = function(error) {
                reject(error);
            };
            reader.onloadend = function() {
                resolve(imgResult);
            };
            });
        },

        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        }
    }
};
</script>