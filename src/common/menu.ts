import { isUrl } from '../utils/utils';

const menuData = [
  {
    name: '其他',
    path: 'other',
    children: [
      {
        name: '上传文档',
        path: 'upload',
      },
      {
        name: '测试权限',
        path: 'test'
      }
    ],
  },
  {
    name: 'dashboard',
    icon: 'dashboard',
    path: 'dashboard',
    children: [
      {
        name: '分析页',
        path: 'analysis',
      },
      {
        name: '监控页',
        path: 'monitor',
      },
      {
        name: '工作台',
        path: 'workplace',
        // hideInBreadcrumb: true,
        // hideInMenu: true,
      },
    ],
  },
];

function formatter(data: any, parentPath: string = '/') {
  return data.map((item: any) => {
    let { path } = item;
    const key = path;
    if (!isUrl(path)) {
      path = parentPath + item.path;
    }
    const result = {
      ...item,
      path,
      key,
    };
    if (item.children) {
      result.children = formatter(item.children, `${parentPath}${item.path}/`);
    }
    return result;
  });
}

export const getMenuData = () => formatter(menuData);
console.info('formaterMenuData->', getMenuData());
