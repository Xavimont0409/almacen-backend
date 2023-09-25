import server from './src/app'
import db from './src/database/models/index'
import dotenv from 'dotenv'
dotenv.config()

const port = process.env.PORT

db.sequelize.sync({alert: true}).then(() => {
	server.listen(port, () => {
		console.log(`Example app listening at http://localhost:${port}`);
	})
})