import Mock from 'mockjs'

const List = []
const count = 100

const baseContent = '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>'
const imgBanner = 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3'

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    uuid: '@uuid',
    startDate: +Mock.Random.date('T'),
    endDate: +Mock.Random.date('T'),
    dateDiscount: +Mock.Random.date('T'),
    nameCourse: '@title(5, 10)',
    content_short: 'mock data',
    content: baseContent,
    reviews: '@integer(1, 5)',
    price: '@integer(500, 10000)',
    discount: '@integer(500, 8000)',
    'status|1': [0, 1],
    date_created: '@datetime',
    corum: '@integer(1, 15)',
    imgBanner,
    platforms: ['a-platform']
  }))
}

export default [
  {
    url: '/courses',
    type: 'get',
    response: config => {
      const { reviews, status, nameCourse, page = 1, limit = 20, sort } = config.query
      console.log(config.query)
      let mockList = List.filter(item => {
        if (reviews && item.reviews !== +reviews) return false
        if (status && item.status !== parseInt(status)) return false
        if (nameCourse && item.nameCourse.indexOf(nameCourse) < 0) return false
        return true
      })

      if (sort === '-uuid') {
        mockList = mockList.reverse()
      }

      const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))

      return {
        code: 20000,
        data: {
          total: mockList.length,
          page,
          items: pageList
        }
      }
    }
  },

  {
    url: '/article/detail',
    type: 'get',
    response: config => {
      const { id } = config.query
      for (const article of List) {
        if (article.id === +id) {
          return {
            code: 20000,
            data: article
          }
        }
      }
    }
  },

  {
    url: '/article/pv',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: {
          pvData: [
            { key: 'PC', pv: 1024 },
            { key: 'mobile', pv: 1024 },
            { key: 'ios', pv: 1024 },
            { key: 'android', pv: 1024 }
          ]
        }
      }
    }
  },

  {
    url: '/article/create',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  },

  {
    url: '/article/update',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  }
]
