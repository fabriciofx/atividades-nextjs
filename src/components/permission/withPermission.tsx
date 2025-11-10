import type { ComponentType } from 'react';

export type PermissionProps = {
  hasPermission: boolean;
};

export default function withPermission<P extends PermissionProps>(
  WrappedComponent: ComponentType<P>
) {
  return (props: P) => {
    if (!props.hasPermission) {
      return <h1>Permissão negada</h1>;
    }
    return <WrappedComponent {...props} />;
  };
}
