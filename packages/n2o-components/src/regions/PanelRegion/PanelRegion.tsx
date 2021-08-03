import React from 'react';
import Card from 'react-bootstrap/Card';

export interface PanelRegionProps {
  className?: string;
  color?: string;
  icon?: React.ReactNode;
  headerTitle?: string;
  footerTitle?: string;
  collapsible?: boolean;
  hasTabs?: boolean;
  fullscreen?: boolean;
  children: React.ReactNode;
}

function PanelRegion({ children }: PanelRegionProps) {
  return (
    <Card>
      <Card.Body>{children}</Card.Body>
    </Card>
  );
}

export default PanelRegion;
