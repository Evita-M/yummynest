interface BreadCrumbItem {
  label: string;
  href?: string;
}

export const generateBreadcrumbs = (pathname: string): BreadCrumbItem[] => {
  const pathSegments = pathname.split('/').filter(Boolean);
  const breadcrumbItems: BreadCrumbItem[] = [{ label: 'Home', href: '/' }];

  let currentPath = '';
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const label = segment
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    breadcrumbItems.push({
      label,
      href: index === pathSegments.length - 1 ? undefined : currentPath,
    });
  });

  return breadcrumbItems;
};
