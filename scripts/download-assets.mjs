import fs from 'fs'
import path from 'path'

const images = [
  // Academic projects
  { id: '1wRJwhSULC6GZUDEP7zgldyNPaTRzkz8k', name: 'ap-01-mars.jpg' },
  { id: '14JaxSZ74DdDwP1gI5js8JfQJB8YJVB83', name: 'ap-02-cultural.jpg' },
  { id: '1qOV1F8XCf13Gk2k2gX52KsfjmuAcGMMf', name: 'ap-03-ando.jpg' },
  { id: '18c3hbkikFPeWRyRgCgCoy8NEYWKeU-ka', name: 'ap-04-highway.jpg' },
  { id: '18KLp4UtTdmGex4MWKIout9ixumxDXn38', name: 'ap-05-nexus.jpg' },
  { id: '1d0CNFXcF7swAh7acvI5oLIBf0A6jFRkM', name: 'ap-06-pedestrian.jpg' },
  { id: '1s7CgSx4aeMkIDbYvlFjfTz9Su2wHfjH9', name: 'ap-07-urban.jpg' },
  { id: '1ewH0axCEUyJqR5darYdydJgUVqgEtqpw', name: 'ap-08-housing.jpg' },
  { id: '1LUTxnhvjVE-P8uLZICf4X9DB-MPZka5_', name: 'ap-09-landscape.jpg' },
  { id: '1Uy6FP_EeX4-O4EgjCvlfhq4NmhzuvIrR', name: 'ap-10-interior.jpg' },
  // Built projects
  { id: '1XQ6XlwmgF4HMzSbx7EvqwXFlBwx6XDOG', name: 'bp-01-narinda-1.jpg' },
  { id: '1pb0aU5B2J9pxirDBpI7DLAsR0UWs-fp6', name: 'bp-01-narinda-2.jpg' },
  { id: '1KJg65jiSXxu0CFyAs9CnxjcNfoWQ6MU9', name: 'bp-01-narinda-3.jpg' },
  { id: '11zyjO67A1TH4GxalgkEGRiS-NjIHsSmS', name: 'bp-01-narinda-4.jpg' },
  { id: '1kSGVfVKP25OVrQWloucd2aSNMnphoGy6', name: 'bp-01-narinda-5.jpg' },
  { id: '1oJLEMfBrjn7H-avxIPw5Gu_5PJ9xtbMx', name: 'bp-01-narinda-6.jpg' },
  { id: '1MMaj3sP3N3hR0h7d1fGxOUw6KITPH2Ft', name: 'bp-01-narinda-7.jpg' },
  { id: '1cJTKu0robTGx21hNOBYs-EV8j-Bvnrwv', name: 'bp-02-villa-1.jpg' },
  { id: '1-w3jvwgA8Wafpm5LruE4W2k3e2vz6Ay4', name: 'bp-02-villa-2.jpg' },
  { id: '1yTw4A6DQynjcRhJMTIAwg6icTfd5j_qS', name: 'bp-02-villa-3.jpg' },
  { id: '1ZvTr5-wcWmni09VxuoRRxW4eqCIOymhz', name: 'bp-02-villa-4.jpg' },
  { id: '1kCl527i5MKOuOwGvM7yLvU67jEnvZ_kx', name: 'bp-02-villa-5.jpg' },
  // About photo
  { id: '1cwJzj50EXDUMzWXcBeec6_VtrK4Ma75N', name: 'about-photo.jpg' },
  // Image strip
  { id: '1BPm_jx9ZMMfrFi76KPBpu4Oy9ZCrqWRi', name: 'strip-1.jpg' },
  { id: '12rkCQ6YpY5H6IVHBzylomz-SbWsYJfDy', name: 'strip-2.jpg' },
  { id: '1ScYhBZHz6D1te-tPzuHo9eRLBCf9TKRw', name: 'strip-3.jpg' },
  // Featured work
  { id: '1qOV1F8XCf13Gk2k2gX52KsfjmuAcGMMf', name: 'featured-ando.jpg' },
  // Archviz renders
  { id: '1CvTgpIA9FiIvY8MNbFtbitIn64cZFjxt', name: 'av-01.jpg' },
  { id: '17Aoxaio_aYYgV0IwdrSrxrwC0WU9E9Cm', name: 'av-02.jpg' },
  { id: '1R1z0qATaD9BzUN95k5jg7USPGascs39g', name: 'av-03.jpg' },
  { id: '1PxUcq_9AtgmynK_uJu4UA1RjVU3wzWby', name: 'av-04.jpg' },
  { id: '111e6W10Dt-xAd0RKIDMoa6yQfG-HJxvj', name: 'av-05.jpg' },
  { id: '13CL5GR4mP4Z-aod-Og1xDTSLBIfYVPmG', name: 'av-06.jpg' },
  { id: '1bM0-DuEWp5ahi2J_oWR8Vzrgpflh_NNG', name: 'av-07.jpg' },
  { id: '1Xh0W4sqdrH_dWQRMOUzk7rk2yup6jaqz', name: 'av-08.jpg' },
  { id: '1907b-2VBIe4wTBDxcpE6mXmj56WjO6u4', name: 'av-09.jpg' },
  { id: '1eRvCGzmpWmhg0VcviOy8TP2Pq1SbRnJ2', name: 'av-10.jpg' },
  { id: '17C-rTW-vGqJLMs6hGgNn0CbOp8NWqumf', name: 'av-11.jpg' },
  { id: '1Cy0EzbNykqDJYpW6RxlCLC5NJqKKeOJw', name: 'av-12.jpg' },
  { id: '1KTqzWfz8VsjtR6HEaFixTGpaXNCNZrka', name: 'av-13.jpg' },
  { id: '13Q3ET4tv1KwQlYjF-xASOcMaeni5FMKB', name: 'av-14.jpg' },
  { id: '1wUoPjjH2NY2EOZqDUzV4YlLxIJ-C4vUW', name: 'av-15.jpg' },
  { id: '1uZcczBOKC-i1i6zo30Pga8Fv-YW4FhQL', name: 'av-16.jpg' },
  { id: '1iRLQVz5vs_JsdwKeW3G0Xfs0zM7GW854', name: 'av-17.jpg' },
  { id: '10g4zzge1r-jdxvAEOVzMcS21V5xNjEt6', name: 'av-18.jpg' },
  { id: '1TMwlBU4SopekE4cFR3tItikycCANGYVD', name: 'av-19.jpg' },
  { id: '1GwJpBmHYyHwMGYv3yU23XMKyxl34dZc7', name: 'av-20.jpg' },
]

const outputDir = path.join(process.cwd(), 'public', 'assets', 'projects')
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true })

async function downloadImage(id, filename) {
  const url = `https://drive.google.com/thumbnail?id=${id}&sz=w1200`
  const dest = path.join(outputDir, filename)

  if (fs.existsSync(dest)) {
    console.log(`Already exists: ${filename}`)
    return
  }

  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1)',
        'Referer': 'https://drive.google.com/',
      },
      redirect: 'follow',
    })

    if (!response.ok) throw new Error(`HTTP ${response.status}`)

    const buffer = await response.arrayBuffer()
    fs.writeFileSync(dest, Buffer.from(buffer))
    console.log(`Downloaded: ${filename} (${buffer.byteLength} bytes)`)
  } catch (err) {
    console.error(`Failed: ${filename} — ${err.message}`)
  }
}

for (const img of images) {
  await downloadImage(img.id, img.name)
  await new Promise(r => setTimeout(r, 300))
}

console.log('Done!')
