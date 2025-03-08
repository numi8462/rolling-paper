import { Button } from "./Button";


function FilledButton( { w='100%', h='56', children , ...rest } ){
    return (
      <Button type='p' w={w} h={h} {...rest}>
        {children}
      </Button>
    )
}

export default FilledButton;