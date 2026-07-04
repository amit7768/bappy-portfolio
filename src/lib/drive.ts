type DriveImageSize = 'w400' | 'w800' | 'w1200' | 'w1400'

/** Drive thumbnail URL — proxied through /api/image to bypass referrer blocking in production. */
export function driveImg(fileId: string, size: DriveImageSize = 'w800'): string {
  return `/api/image?id=${fileId}&sz=${size}`
}

/** Drive preview (iframe embed) URL for video files. */
export function driveVideo(fileId: string): string {
  return `https://drive.google.com/file/d/${fileId}/preview`
}
