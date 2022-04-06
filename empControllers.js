var config = require("./config");
const sql = require("mssql");
 
async function getdata() {
  try {
    let pool = await sql.connect(config);
    console.log("sql server connected...");
  } catch (error) {
console.log("Error:" + error);
  }
}
 

async function getdata_withQuery() {
    try {
      let pool = await sql.connect(config);
      let res = await pool.request().query("SELECT *  FROM emp");
      return res.recordsets;
    } catch (error) {
      console.log("Error :" + error);
    }
  }
  
async function adddata_withQuery(req) {
    const {id,emp_name} = req
    try {
        let pool = await sql.connect(config);
        let add_pool = await pool.request().query(`insert into emp(id,emp_name) values(${id},'${emp_name}')`);
        let res = await pool.request().query("SELECT *  FROM emp");
        return res.recordsets
      } catch (error) {
        console.log("Error :" + error);
      }
}

async function getataById(id) {
    try {
      let pool = await sql.connect(config);
      let res = await pool.request().query(`select * from emp where id= ${id}`);
      return res.recordsets;
    } catch (error) {
      console.log("Error :" + error);
    }
  }
async function deleteByEmpId(id) {
    try {
      let pool = await sql.connect(config);
      let res = await pool.request().query(`delete from emp where id= ${id}`);
      return res.recordsets;
    } catch (error) {
      console.log("Error :" + error);
    }
  }
async function deleteAllEmp() {
    try {
      let pool = await sql.connect(config);
      let res = await pool.request().query(`delete from emp`);
      return res.recordsets;
    } catch (error) {
      console.log("Error :" + error);
    }
  }
async function updateByEmp(req) {
    const {id , emp_name} = req
    console.log(`update set emp_name='${emp_name}' from emp where id= ${id}`)
    try {
      let pool = await sql.connect(config);
      let update_res = await pool.request().query(`update emp set emp_name='${emp_name}' where id= ${id}`);
      let res = await pool.request().query("SELECT *  FROM emp");
      return res.recordsets
    } catch (error) {
      console.log("Error :" + error);
    }
  }

module.exports = {
  getdata: getdata,
  getdata_withQuery:getdata_withQuery,
  adddata_withQuery:adddata_withQuery,
  getataById:getataById,
  updateByEmp:updateByEmp,
  deleteByEmpId:deleteByEmpId,
  deleteAllEmp:deleteAllEmp
};
