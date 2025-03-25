import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import './Team.css'
import { Autoplay } from 'swiper/modules'
import SectionTitle from '../SectionTitle/SectionTitle'


function Team() {
  return (
    <div className='team-container'>
      <div className="team-title">
        <SectionTitle title="Team" />
      </div>
      <div className="team-main">
        <div className="team-swiper">
          <Swiper
            loop={true}
            modules={[Autoplay]}
            autoplay={{delay:0}}
            slidesPerView={4.5}
            speed={5000}
            spaceBetween={150}
          >
            <SwiperSlide>
              <div className="dummy-team-img"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="dummy-team-img"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="dummy-team-img"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="dummy-team-img"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="dummy-team-img"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="dummy-team-img"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="dummy-team-img"></div>
            </SwiperSlide>
          </Swiper>
          <Swiper
            loop={true}
            modules={[Autoplay]}
            autoplay={{delay:0,
              reverseDirection: true
            }}
            slidesPerView={4.5}
            speed={5000}
            spaceBetween={150}
          >
            <SwiperSlide>
              <div className="dummy-team-img"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="dummy-team-img"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="dummy-team-img"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="dummy-team-img"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="dummy-team-img"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="dummy-team-img"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="dummy-team-img"></div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="team-intro">
          <div className="team-intro-sen">
            <p>メンバーに関する文メンバーに関する文メンバーに関する文メンバーに関する文メンバーに関する文メンバーに関する文</p>
          </div>
          <div className="member-list-button">
            <button>Member list</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team