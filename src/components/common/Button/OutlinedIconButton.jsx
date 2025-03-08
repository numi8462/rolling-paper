import { Button } from "./Button";


export function OutlinedIconButton( { w='100%', h='56', children, ...rest  } ){
    return (
      <Button type='o' w={w} h={h} {...rest}>
        <img src={icon} alt='' />
        <span>Click me</span>
      </Button>
    )
}
