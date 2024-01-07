import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function QuillEditor() {
  const [text, setText] = useState('');

  const modules = {
    toolbar: {
      container: [
        [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['bold', 'italic', 'underline', 'strike'],
        ['link'],
        [{ 'align': [] }], // Text alignment options, including 'justify'
        ['clean'],
      ],
    },
  };

  const formats = [
    'header',
    'font',
    'list',
    'align', // Add the 'align' format to enable text alignment
    'bold',
    'italic',
    'underline',
    'strike',
    'link',
  ];

  const handleChange = (content) => {
    setText(content);
  };

  return (
    <div>
      <ReactQuill
        value={text}
        onChange={handleChange}
        modules={modules}
        formats={formats}
      />
    </div>
  );
}

export default QuillEditor;
