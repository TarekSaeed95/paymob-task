import { Logo } from "../icons"

export const Header = () => {
  return (
    <section className="[&_svg]:w-20 absolute flex items-center justify-between w-full h-12 bg-white px-11">
      <Logo />
    </section>
  )
}
