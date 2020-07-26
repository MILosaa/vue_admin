<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="权限名称" >
        <el-input v-model="form.title"  />
      </el-form-item>
  
      <el-form-item>
        <el-button type="primary" @click="onSubmit">修改</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {editcategory} from '@/api/shop';
export default {
  data() {
    return {
      form: {
          id:'',
        title: '',
      },
      listLoading:false
    }
  },
  beforeMount(){
     let category =  this.$route.query;
     this.form.title = category.title;
     this.form.id = category.id;
  },
  methods: {
    onSubmit() {  
       editcategory(this.form)
       this.$message('修改成功')
       this.$router.push('/shop/category');
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    }
  },
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

