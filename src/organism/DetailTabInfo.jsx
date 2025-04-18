import React, { useState } from 'react'
import css from './DetailTabInfo.module.css'

const DetailTabInfo = () => {
  const [activeTab, setActive] = useState(0)
  const tabTitles = ['메뉴1', '메뉴2', '메뉴3']
  return (
    <>
      <div className={css.tabBtn}>
        {tabTitles.map((title, i) => (
          <button
            key={i}
            className={activeTab === i ? css.active : ''}
            onClick={() => setActive(i)}
          >
            {title}
          </button>
        ))}
      </div>
      <div className={`${css.tabContent} ${activeTab === 0 ? css.visible : ''}`}>
        <h3>제목1</h3>
        <p>내용</p>
        <p>내용</p>
        <p>내용</p>
        <p>내용</p>
      </div>
      <div className={`${css.tabContent} ${activeTab === 1 ? css.visible : ''}`}>
        <h3>제목2</h3>
        <p>내용</p>
        <p>내용</p>
        <p>내용</p>
        <p>내용</p>
      </div>
      <div className={`${css.tabContent} ${activeTab === 2 ? css.visible : ''}`}>
        <h3>제목3</h3>
        <p>내용</p>
        <p>내용</p>
        <p>내용</p>
        <p>내용</p>
      </div>
    </>
  )
}

export default DetailTabInfo
