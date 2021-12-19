import React from 'react';
import 'tui-image-editor/dist/tui-image-editor.css';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ImageEditor from '@toast-ui/react-image-editor';

const PhotoEditor: React.FC = () => {
  return (
    <ImageEditor
      includeUI={{
        theme: null,
        menu: ['shape', 'filter'],
        initMenu: 'filter',
        uiSize: {
          margin: '0px',
          width: '100%',
          height: '100vh',
        },
        menuBarPosition: 'bottom',
      }}
      cssMaxHeight={500}
      cssMaxWidth={700}
      selectionStyle={{
        cornerSize: 20,
        rotatingPointOffset: 70,
      }}
      usageStatistics={true}
    />
  );
};

export default PhotoEditor;
