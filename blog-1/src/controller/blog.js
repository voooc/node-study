const getList = (author, keyword) => {
  // 先返回假数据（格式是正确的）
  return [
    {
      id: 1,
      title: '标题A',
      content: '内容A',
      createTime: 1656987824494,
      author: 'ZHANGSAN'
    },
    {
      id: 2,
      title: '标题B',
      content: '内容B',
      createTime: 1656987909606,
      author: 'LISI'
    }
  ]
}

const getDetail = (id) => {
  // 先返回假数据
  return {
    id: 1,
    title: '标题A',
    content: '内容A',
    createTime: 1656987824494,
    author: 'ZHANGSAN'
  }
}

const newBlog =  (blogData = {}) => {
  console.log('newBlog blogData...', blogData)
  // blogData是一个博客对象
  return {
    id: 3, // 表示新建博客，插入到数据表里面的id

  }
}

const updateBlog = (id, blogData = {}) => {
  console.log('update blog', id, blogData)
  return true
}

const delBlog = (id) => {
  return true
}
module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
}