import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './AchievementCard.css'
import { Pagination } from 'swiper/modules';

function AchievementCard(props: {title: string, description: string }) { //写真のデータが来たらpropsに「img_url: string」を追加して差し替える。
  return (
    <div className='swiper-container'>
      <Swiper
        modules={[Pagination]}
        spaceBetween={0}
        slidesPerView={3}
        pagination={true}
      >
      <SwiperSlide>
        <div className="achievement-card">
          <div className="dummy-img"></div>
          <h3 className="achievement-card-title">
            {props.title}
          </h3>
          <p className="achievement-card-description">
            {props.description}
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="achievement-card">
          <div className="dummy-img"></div>
          <h3 className="achievement-card-title">
            {props.title}
          </h3>
          <p className="achievement-card-description">
            {props.description}
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="achievement-card">
          <div className="dummy-img"></div>
          <h3 className="achievement-card-title">
            {props.title}
          </h3>
          <p className="achievement-card-description">
            {props.description}
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="achievement-card">
          <div className="dummy-img"></div>
          <h3 className="achievement-card-title">
            {props.title}
          </h3>
          <p className="achievement-card-description">
            {props.description}
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="achievement-card">
          <div className="dummy-img"></div>
          <h3 className="achievement-card-title">
            {props.title}
          </h3>
          <p className="achievement-card-description">
            {props.description}
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="achievement-card">
          <div className="dummy-img"></div>
          <h3 className="achievement-card-title">
            {props.title}
          </h3>
          <p className="achievement-card-description">
            {props.description}
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="achievement-card">
          <div className="dummy-img"></div>
          <h3 className="achievement-card-title">
            {props.title}
          </h3>
          <p className="achievement-card-description">
            {props.description}
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="achievement-card">
          <div className="dummy-img"></div>
          <h3 className="achievement-card-title">
            {props.title}
          </h3>
          <p className="achievement-card-description">
            {props.description}
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="achievement-card">
          <div className="dummy-img"></div>
          <h3 className="achievement-card-title">
            {props.title}
          </h3>
          <p className="achievement-card-description">
            {props.description}
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  
    </div>
  )
}

export default AchievementCard