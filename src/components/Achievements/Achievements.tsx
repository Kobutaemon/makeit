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
          modules={[Pagination]}
          loop={true}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 100,
            },
            768: {
              slidesPerView: 1.5,
              spaceBetween: 100,
            },
            1024: {
              slidesPerView: 3.8,
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