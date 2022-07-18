import { envelop } from '@envelop/core'
import { useHive } from '@graphql-hive/client'

const envelopProxy = envelop({
  plugins: [
    useHive({
      enabled: true,
      debug: true, // or false
      token: '24225e40cf2c9ec3d0b2d6d959cb87a6',
      usage: true // or { ... usage options }
    })
  ]
})
export default envelopProxy