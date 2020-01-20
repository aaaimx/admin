export function getDrivePhoto (drive_url) {
  try {
    var result = drive_url.split('https://drive.google.com/file/d/')
    result = result[1]
    result = result.split('/view?usp=drivesdk')
    return 'https://drive.google.com/uc?id=' + result[0]
  } catch (error) {
    return ''
  }
}
