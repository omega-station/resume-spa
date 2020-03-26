export interface Props {
  /** PageType */
  pagetype?: number;
  /** Section name */
  section?: string;
  /** Is this element currently in the waypoint zone? */
  isWaypoint?: boolean;
  /** Display enhanced heading? */
  hasEnhancedHeading?: boolean;
  /** Display list item points as check icons? */
  hasListItemCheck?: boolean;
  /** Display References section resume image? */
  hasResumeImage?: boolean;
  /** Display Skillset section proficiency listing as SVG chart? */
  useSkillsetChart?: boolean;
}
