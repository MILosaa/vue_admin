<template>
  <div class="app-container">
    <div style="padding:8px">
      <el-button @click="add" type ="primary" icon ="el-icon-add" >添加用户</el-button>
      </div>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>
      <el-table-column label="用户名" width="300" align="center">
        <template slot-scope="scope" >
          {{ scope.row.username }}
        </template>
      </el-table-column>
      <el-table-column label="邮箱" width="420" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.email }}</span>
        </template>
      </el-table-column>
      <el-table-column label="电话号码" align="center">
        <template slot-scope="scope">
          {{ scope.row.mobile }}
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="状态" width="160" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status==1?"正常":"禁用" }}</el-tag>
        </template>
      </el-table-column>
       <el-table-column l  align="center">
           <template slot-scope="scope"> 
               <el-button @click="edit(scope.row.id)" type ="primary" icon ="el-icon-edit" circle></el-button>
               <el-button @click="del(scope.row.id)" type ="danger" icon ="el-icon-delete-solid" circle></el-button>
           </template>
       </el-table-column>
    </el-table>
    <div style="height:100px;display:flex;justify-content: center;align-items:center">
    <el-pagination
        background
        layout="prev, pager, next"
        :total="total" @current-change="getPageUser">
    </el-pagination>
    </div >
  </div>
</template>

<script>
import { userlist,deluser} from '@/api/admin'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        '1': 'success',
        '0': 'gray',
        '-1': 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      total:null,       
      list: null,
      listLoading: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      userlist().then(response => {
        this.list = response.userlist
        this.total = response.total
        console.log(response)
        this.listLoading = false
      })
    },
    getPageUser(page){
        this.listLoading = true
        userlist({page:page}).then(response => {
        this.list = response.userlist
        this.total = response.total
        console.log(response)
        this.listLoading = false
      })
    },
     del(id){
         this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async() => {
            this.listLoading = true
            let res = await deluser({id});
            this.listLoading = false
            this.fetchData()
            this.$message({
            type: 'success',
            message: '删除成功!'
          });
        })
    },
    edit(id){
      this.$router.push({
        path:'/user/edituser',
        query:{id}
      })
    },
    add(){
      this.$router.push({
        path:'/user/adduser'
      })
    }
  }
}
</script>
