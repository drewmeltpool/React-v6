import { faEllipsisV, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Button from '../../components/Button';
import FlatList from '../../components/FlatList';
import Title from '../../components/Title';
import Image from '../../components/Image';
import { useFetch } from '../../../hooks/useFetch';
import './admin.scss';

const Admin: React.FC = () => {
  const { data } = useFetch(
    'https://api.unsplash.com/photos/?client_id=G36HLpMpORyLoY45oF9Vqy1GjIrGA3zI22zvPOOCnzQ'
  );

  return (
    <>
      <Button
        variant="primary"
        text={
          <>
            <Icon className="icon" icon={faPlus} />
            Add image
          </>
        }
      />
      <Title variant="primary">Images</Title>
      <FlatList
        data={data}
        className="user-image-list"
        itemProps={{ className: 'user-image-item' }}
        component={({ urls, description, user }) => (
          <div className="upload-image-wrapper">
            <Image className="upload-image" src={urls.small} />

            <div className="upload-image-info">
              <h4 className="upload-image-description">
                {description || 'Image'}
              </h4>
              <h4 className="upload-image-name">{user.name}</h4>
            </div>

            <Button
              className="upload-image-btn"
              text={<Icon icon={faEllipsisV} />}
            />
          </div>
        )}
      />
    </>
  );
};

export default Admin;
