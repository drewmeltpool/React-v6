import {
  faImages,
  faInfo,
  faServer,
  faUser,
  faUserTie,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Stat, StatBox } from '../../components/Stat';
import Title from '../../components/Title';

const AdminHome: React.FC = () => {
  return (
    <>
      <Title variant="primary">Statistics</Title>

      <StatBox column="2">
        <Stat title="Unique user" value="50" icon={faUserTie} variant="dark" />
        <Stat
          title="Images converted"
          value="124"
          icon={faInfo}
          variant="primary"
        />
      </StatBox>

      <Title variant="secondary">Weekly</Title>

      <StatBox column="3">
        <Stat
          title="User registrated"
          value="4"
          icon={faUserTie}
          variant="secondary"
        />
        <Stat
          title="Images converted"
          value="22"
          icon={faImages}
          variant="info"
        />
        <Stat
          title="Site visited"
          value="124"
          icon={faUser}
          variant="warning"
        />
      </StatBox>

      <Title variant="secondary">Server</Title>

      <StatBox column="1">
        <Stat
          title="Memory used"
          value="23.4MB"
          icon={faServer}
          variant="purple"
        />
      </StatBox>
    </>
  );
};

export default AdminHome;
