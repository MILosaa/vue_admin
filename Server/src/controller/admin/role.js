const Base = require('../base.js');

module.exports = class extends Base {
    __before(){
      return this.checkAuth()
    }
    indexAction() {
        return this.json({msg:"admin page"})
    }

    async rolelistAction(){
        let page = this.get('page')?this.get('page'):1;
        let rolelist = await this.model('auth_role').order('id').order('id').page(page).select();
        let total = await this.model('auth_role').count()
        return this.json({rolelist,total})
    }

    async delroleAction(){
        let userid = this.get('id');
        await this.model('auth_role').where({id:userid}).delete();
        this.json({msg:"删除成功"})
    }

    async addroleAction(){
        if(this.method=='POST'){
            let role = this.post();
            role.status = role.status?"1":"-1";
            this.model('auth_role').add(role);
            this.json({msg:"添加成功"})
        }
    }

    async editroleAction(){
        if(this.method=='POST'){
            let role = this.post();
            role.status = role.status?"1":"-1";
            this.model('auth_role').where({id:role.id}).update({desc:role.desc,rule_ids:role.rule_ids});
            this.json({msg:"修改成功"})
        }
    }
};

