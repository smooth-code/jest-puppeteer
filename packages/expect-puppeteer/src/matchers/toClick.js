import toMatchElement from './toMatchElement'
import { getContext } from '../utils'

async function toClick(instance, selector, options) {
  const { page } = await getContext(instance, () => document)
  const element = await toMatchElement(instance, selector, options)

  await page.evaluate((el) => el.click(), element)
}

export default toClick
