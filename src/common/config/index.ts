import { Logger } from '@nestjs/common'
import development from './env.development'
import production from './env.production'

const configs = {
  development,
  production
}
Logger.log('Node:', process.env.NODE_ENV)

const env = configs[process.env.NODE_ENV || 'development']

export { env }
