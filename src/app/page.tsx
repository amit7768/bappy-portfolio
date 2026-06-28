import HeroSection from '@/components/home/HeroSection'
import TickerStrip from '@/components/home/TickerStrip'
import StatsStrip from '@/components/home/StatsStrip'
import ImageStrip from '@/components/home/ImageStrip'
import FeaturedWork from '@/components/home/FeaturedWork'

export default function Home() {
  return (
    <>
      <HeroSection />
      <TickerStrip />
      <StatsStrip />
      <ImageStrip />
      <FeaturedWork />
    </>
  )
}
