import dayjs from 'dayjs'
import minMax from 'dayjs/plugin/minMax.js'
import utc from 'dayjs/plugin/utc.js'
import timezone from 'dayjs/plugin/timezone.js'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.tz.setDefault('Asia/Tokyo')
dayjs.extend(minMax)

console.log(dayjs.min(dayjs(), dayjs('2018-01-01'), dayjs('2019-01-01')))
console.log(dayjs.min([dayjs(), dayjs('2023-01-01'), dayjs('2024-01-01')]))