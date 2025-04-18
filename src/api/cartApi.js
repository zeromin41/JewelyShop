import axios from 'axios'

export const getCartData = async () => {
  try {
    const res = await axios.get(`/api/cart/`)
    console.log('getCartData.js : getCartData', res)
    return res.data
  } catch (err) {
    console.log('err', err)
    // throw err
  }
}

export const addtoCart = async cartItem => {
  // 기존 장바구니 리스트 조회
  // 이미 저장된 리스트가 있는지 확인 .find?
  // 리스트가 존재하면  count 만 증가 put
  // 리스트가 없으면 전체 데이터 추가 post
  try {
    const cart = await getCartData()
    const existingItem = cart.find(item => item.id === cartItem.id)
    if (existingItem) {
      const uedateItem = {
        ...existingItem,
        count: existingItem.count + cartItem.count,
      }
      const res = await axios.put(`/api/cart/${existingItem.id}`, uedateItem)
      return res.data
    } else {
      const res = await axios.post(`/api/cart/`, cartItem)
      return res.data
    }
  } catch (err) {
    console.log('err', err)
  }
}
