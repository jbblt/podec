import { Children, ReactNode } from 'react';

interface FieldFormProps {
  children: ReactNode;
  label: string;
  error: Error;
}

export const FieldForm = ({ children, label, error }: FieldFormProps) => {
  const id = getChildId(children);

  return (
    <div className="col-sm-12 mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      {children}
      {error && <small className="error">{error.message}</small>}
    </div>
  );
};

// Get id prop from a child element
export const getChildId = (children: any) => {
  const child = Children.only(children);

  if ('id' in child?.props) {
    return child.props.id;
  }
};
