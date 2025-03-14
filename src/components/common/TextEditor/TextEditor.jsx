import { Quill } from 'react-quill';
import 'quill/dist/quill.core.css';

const quill = new Quill('editor');

export default function TextEditor () {
    return(
        <quill />        
    );
}