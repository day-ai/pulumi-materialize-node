import * as pulumi from "@pulumi/pulumi";
export declare class RoleParameter extends pulumi.CustomResource {
    /**
     * Get an existing RoleParameter resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RoleParameterState, opts?: pulumi.CustomResourceOptions): RoleParameter;
    /**
     * Returns true if the given object is an instance of RoleParameter.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is RoleParameter;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    readonly region: pulumi.Output<string>;
    /**
     * The name of the role to grant privilege to.
     */
    readonly roleName: pulumi.Output<string>;
    readonly roleParameterId: pulumi.Output<string>;
    /**
     * The name of the session variable to modify.
     */
    readonly variableName: pulumi.Output<string>;
    /**
     * The value to assign to the session variable.
     */
    readonly variableValue: pulumi.Output<string>;
    /**
     * Create a RoleParameter resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RoleParameterArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering RoleParameter resources.
 */
export interface RoleParameterState {
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    region?: pulumi.Input<string>;
    /**
     * The name of the role to grant privilege to.
     */
    roleName?: pulumi.Input<string>;
    roleParameterId?: pulumi.Input<string>;
    /**
     * The name of the session variable to modify.
     */
    variableName?: pulumi.Input<string>;
    /**
     * The value to assign to the session variable.
     */
    variableValue?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a RoleParameter resource.
 */
export interface RoleParameterArgs {
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    region?: pulumi.Input<string>;
    /**
     * The name of the role to grant privilege to.
     */
    roleName: pulumi.Input<string>;
    roleParameterId?: pulumi.Input<string>;
    /**
     * The name of the session variable to modify.
     */
    variableName: pulumi.Input<string>;
    /**
     * The value to assign to the session variable.
     */
    variableValue: pulumi.Input<string>;
}
