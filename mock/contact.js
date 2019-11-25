import Mock from 'mockjs'

const List = []
const count = 100
const baseContent =
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam nobis neque repellat illum, dolores tempore totam quidem, optio atque est quis impedit, libero aliquam voluptate sed aperiam maiores. Eos, debitis!'

for (let i = 0; i < count; i++) {
  List.push(
    Mock.mock({
      id: '@uuid',
      date_created: +Mock.Random.date('T'),
      name: '@name()',
      comment: baseContent,
      phone: '@integer(550000000, 999999999)',
      email: '@email'
    })
  )
}

export default [
  {
    url: '/contact/list',
    type: 'get',
    response: config => {
      const { page = 1, name, limit = 20 } = config.query
      const mockList = List.filter(item => {
        if (name && item.name.indexOf(name) < 0) return false
        return true
      })
      const pageList = mockList.filter(
        (item, index) => index < limit * page && index >= limit * (page - 1)
      )

      return {
        code: 20000,
        data: {
          total: mockList.length,
          items: pageList
        }
      }
    }
  }
]
