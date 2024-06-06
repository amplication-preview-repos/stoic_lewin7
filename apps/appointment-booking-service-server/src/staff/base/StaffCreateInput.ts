/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AppointmentCreateNestedManyWithoutStaffItemsInput } from "./AppointmentCreateNestedManyWithoutStaffItemsInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class StaffCreateInput {
  @ApiProperty({
    required: false,
    type: () => AppointmentCreateNestedManyWithoutStaffItemsInput,
  })
  @ValidateNested()
  @Type(() => AppointmentCreateNestedManyWithoutStaffItemsInput)
  @IsOptional()
  @Field(() => AppointmentCreateNestedManyWithoutStaffItemsInput, {
    nullable: true,
  })
  appointments?: AppointmentCreateNestedManyWithoutStaffItemsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;
}

export { StaffCreateInput as StaffCreateInput };
