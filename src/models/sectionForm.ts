import { type YesOrNo } from 'models/enum/commonEnum';

export type SectionForm = {
  above: string;
  liner: {
    front: string;
    back: string;
  };
  perforation: {
    above: string;
    plateau: string;
    upper: string;
    throughAll: string;
  };
  antiSlide: YesOrNo;
  toeOfShoe: YesOrNo;
  stitching: {
    sewingColor: string;
    other: string;
  };
  foamBead: YesOrNo;
  simulatedBead: YesOrNo;
  reportedBead: YesOrNo;

  rightFeet: {
    quarterPadding: { ext: number; int: number };
    tonguePadding: { ext: number; int: number };
    whaling: { ext: number; int: number };
    tonguePodiaflex: 0.8 | 1.2 | 1.8;
    rm: YesOrNo;
    height: string;
    circ: string;
    steelStake: string;
  };
  leftFeet: {
    quarterPadding: { ext: number; int: number };
    tonguePadding: { ext: number; int: number };
    whaling: { ext: number; int: number };
    tonguePodiaflex: 0.8 | 1.2 | 1.8;
    rm: YesOrNo;
    height: string;
    circ: string;
    steelStake: string;
  };
};
