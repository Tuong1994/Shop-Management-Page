import type { FC, ReactNode } from "react"
import { Title } from "@/components/ui/typography"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ERole } from "@/models/user/user.enum"
import { renderJobTitle } from "./hiring-list-card/helper"
import useLocale from "@/locale/use-locale"

interface HiringListCarouselProps {
  role?: ERole
  children?: ReactNode
}

const HiringListCarousel: FC<HiringListCarouselProps> = ({ role = ERole.CASHIER, children }) => {
  const { lang } = useLocale()

  return (
    <Card className="gap-2 p-2 not-last:mb-8">
      <CardHeader>
        <Title level={4}>{renderJobTitle(role, lang)}</Title>
      </CardHeader>
      <CardContent className="p-2">
        <Carousel opts={{ align: "start" }} className="w-full">
          <CarouselContent className="p-4">
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="basis-1/1 sm:basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                {children}
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </CardContent>
    </Card>
  )
}

export default HiringListCarousel
