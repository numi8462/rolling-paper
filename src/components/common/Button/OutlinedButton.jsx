import { Button } from "./Button";


function OutlinedButton( { w='100%', h='56', children, ...rest  } ){
    return (
      <Button type='o' w={w} h={h} {...rest}>
        {children}
      </Button>
    )
}

export default OutlinedButton;