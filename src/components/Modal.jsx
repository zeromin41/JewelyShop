import React, { useEffect, useState } from 'react'
import css from './Modal.module.css'
import { formmatCurrency } from '@/utils/features'
import { useNavigate } from 'react-router-dom'
import { addtoCart } from '@/api/cartApi'

const Modal = ({ product, count, onClose }) => {
  const [isctive, setIsActive] = useState(false)
  const navigate = useNavigate()

  // 컴포넌트가 마운트 된 직후 active 클래스 추가
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(true)
      document.body.style.overflow = 'hidden'
    }, 5)

    return () => {
      clearTimeout(timer)
      document.body.style.overflow = 'auto'
    }
  }, [])

  const handleClose = () => {
    setIsActive(false)
    setTimeout(onClose, 300)
  }

  const handleAddToCart = async () => {
    // 장바구니 상품을 추가 json-server 추가

    try {
      const cartItem = {
        id: product.id,
        title: product.title,
        img: product.img,
        price: product.price,
        category: product.category,
        discount: product.discount,
        count: count,
      }
      await addtoCart(cartItem)
      handleClose()
      navigate('/cart')
    } catch (err) {
      console.log('장바구니 추가 중 오류 발생', err)
    }
  }
  return (
    <div className={`${css.modal} ${isctive ? css.active : ''}`}>
      <div className={`${css.container} `}>
        <div className={css._inner}>
          <h2>장바구니</h2>
          <div className={css.imgWrap}>
            <img src={`/public/img/${product.img}`} alt={product.title} />
          </div>
          <div className={css.info}>
            <p>{product.tilte}</p>
            <p>{formmatCurrency(product.price)}</p>
            {product.discount > 0 && <p>{product.discount}%</p>}
            <p>{count}</p>
            <p>총 가격 : {formmatCurrency(product.price * count)}</p>
          </div>
          <button onClick={handleClose}>취소</button>
          <button onClick={handleAddToCart}>장바구니 담기</button>
        </div>
        <button className={css.btnClose} onClick={handleClose}>
          <i className="bi bi-x-lg"></i>
        </button>
      </div>
    </div>
  )
}

export default Modal
