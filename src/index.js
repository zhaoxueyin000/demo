import dva from 'dva'
import './index.css'

// 1. Initialize
const app = dva({
  initialState: {
    products: [
      { name: 'dva', age: '18', id: 1, key: 1 },
      { name: 'antd', age: '18', id: 2, key: 2 },
      { name: 'dva', age: '18', id: 3, key: 3 },
      { name: 'antd', age: '18', id: 4, key: 4 },
      { name: 'dva', age: '18', id: 5, key: 5 },
      { name: 'antd', age: '18', id: 6, key: 6 },
      { name: 'dva', age: '18', id: 7, key: 7 },
      { name: 'antd', age: '18', id: 8, key: 8 },
      { name: 'dva', age: '18', id: 9, key: 9 },
      { name: 'antd', age: '18', id: 10, key: 10 },
      { name: 'dva', age: '18', id: 11, key: 11 },
      { name: 'antd', age: '18', id: 12, key: 12 },
      { name: 'dva', age: '18', id: 13, key: 13 },
      { name: 'antd', age: '18', id: 14, key: 14 },
      { name: 'dva', age: '18', id: 15, key: 15 }
    ]
  }
})

// 2. Plugins
// app.use({})

// 3. Model
// app.model(require('./models/example').default)
app.model(require('./models/products').default)

// 4. Router
app.router(require('./router').default)

// 5. Start
app.start('#root')
