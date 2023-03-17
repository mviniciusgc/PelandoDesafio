import 'module-alias/register'
import app from '@/main/config/app'
import { env } from '@/main/config/env'

app.listen(env.port, env.host, () => console.log(`Server running at port ${env.port}`))
