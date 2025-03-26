import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Achievements.css'
import { Pagination } from 'swiper/modules';
import SectionTitle from '../SectionTitle/SectionTitle'
import AchievementCard from '../AchievementCard/AchievementCard'  

function Achievements(){
  return (
    <div className='achievements'>
      <div className="achievements-title">
        <SectionTitle title='Achievements' />
      </div>
      <div className="achievements-content">
        <Swiper
          // slidesPerView={3}
          // spaceBetween={100}
          modules={[Pagination]}
          loop={true}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1.8,
              spaceBetween: 100,
            },
            1000: {
              slidesPerView: 2.2,
              spaceBetween: 100,
            },
            1500: {
              slidesPerView: 2.8,
              spaceBetween: 100,
            }
        }}
        >
          <SwiperSlide>
            <AchievementCard title='Test Achievement 1' description='This is the test achievementThis is the test achievementThis is the test achievementThis is the test achievementThis is the test achievement'/>
          </SwiperSlide>
          <SwiperSlide>
            <AchievementCard title='Test Achievement 2' description='This is the test achievementThis is the test achievementThis is the test achievementThis is the test achievementThis is the test achievement'/>
          </SwiperSlide>
          <SwiperSlide>
            <AchievementCard title='Test Achievement 3' description='This is the test achievementThis is the test achievementThis is the test achievementThis is the test achievementThis is the test achievement'/>
          </SwiperSlide>
          <SwiperSlide>
            <AchievementCard title='Test Achievement 4' description='This is the test achievementThis is the test achievementThis is the test achievementThis is the test achievementThis is the test achievement'/>
          </SwiperSlide>
          <SwiperSlide>
            <AchievementCard title='Test Achievement 5' description='This is the test achievementThis is the test achievementThis is the test achievementThis is the test achievementThis is the test achievement'/>
          </SwiperSlide>
          <SwiperSlide>
            <AchievementCard title='Test Achievement 6' description='This is the test achievementThis is the test achievementThis is the test achievementThis is the test achievementThis is the test achievement'/>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Achievements