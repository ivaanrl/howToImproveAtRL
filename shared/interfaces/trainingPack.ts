export interface TrainingPack {
  training_pack_id: number;
  field_image:
    | 'Mannfield'
    | 'DFH'
    | 'Urban'
    | 'Utopia'
    | 'Wasteland'
    | 'Aquadome'
    | 'Neo'
    | 'Champions'
    | 'Farmstead'
    | 'Salty'
    | 'Forbidden';
  difficulty: string;
  training_pack_code: string;
  training_style: {};
  training_pack_name: string;
  name: string;
  youtube_explanation: string | null;
}

export const isTrainingPack = (arg: any): arg is TrainingPack =>
  arg && arg.training_pack_id && typeof arg.training_pack_id == 'number';
