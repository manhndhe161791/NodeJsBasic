import pool from "../configs/connectDB";

let getHomepage = async (req, res) => {
    const [rows, fields] = await pool.query("SELECT * from `user`");
    return res.render('index.ejs', { dataUser: (rows), test: 'data testing' })
}
let getDetailPage = async (req, res) => {
    let id = req.params.id
    let [user] = await pool.execute(`SELECT * FROM user WHERE id = ${id}`)
    return res.send(user[0])
}

module.exports = {
    getHomepage, getDetailPage
}