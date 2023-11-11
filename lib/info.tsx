import me from '@/public/images/avatarMe.jpg'
import dark_me_image from '@/public/images/selfImages/Me-dark-cloud.jpg'
import light_me_image from '@/public/images/selfImages/Me-cloud.jpg'

//Info

export const name = 'Adam Gonzalez'
export const avatar = me
export const dark_contact = dark_me_image
export const light_contact = light_me_image
export const about = () => {
  return (
    <>
      Hey there! I&apos;m Adam Gonzalez, a passionate Software Engineer residing
      in the vibrant tech hub of San Francisco, California. With a robust
      expertise in technologies such as Python, HTML, Git, React, Next.js,
      TypeScript, and JavaScript, I specialize in both Front End and Back End
      Development.
    </>
  )
}

export const bio = () => {
  return (
    <>
      One of my passions lies in the world of open-source development. I am an
      active contributor on platforms like GitHub, where I collaborate with
      fellow developers and contribute to innovative projects that shape the
      future of technology.
    </>
  )
}
