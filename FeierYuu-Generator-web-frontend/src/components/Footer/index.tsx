import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import '@umijs/max';
import React from 'react';

const Footer: React.FC = () => {
  const defaultMessage = '程序员飞飞鱼';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'codeNav',
          title: '编程导航',
          href: 'https://yupi.icu',
          blankTarget: true,
        },
        {
          key: 'Ant Design',
          title: '编程宝典',
          href: 'https://codefather.cn',
          blankTarget: true,
        },
        {
          key: 'github',
          title: (
            <>
              <GithubOutlined /> 飞飞鱼源码
            </>
          ),
          href: 'https://github.com/FeierYuu/FeierYuu-CodeGenerator',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
