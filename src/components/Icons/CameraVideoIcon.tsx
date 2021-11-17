import { SvgIcon, SvgIconProps } from './SvgIcon'

export const CameraVideoIcon = ({ fill = 'none', stroke = 'currentColor' }: SvgIconProps) => {
  return (
    <SvgIcon className="bi bi-camera-video" viewBox="0 0 24 24" fill="none">
      <path
        d="M23 7L16 12L23 17V7Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 5H3C1.89543 5 1 5.89543 1 7V17C1 18.1046 1.89543 19 3 19H14C15.1046 19 16 18.1046 16 17V7C16 5.89543 15.1046 5 14 5Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}