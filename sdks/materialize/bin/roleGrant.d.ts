import * as pulumi from "@pulumi/pulumi";
export declare class RoleGrant extends pulumi.CustomResource {
    /**
     * Get an existing RoleGrant resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RoleGrantState, opts?: pulumi.CustomResourceOptions): RoleGrant;
    /**
     * Returns true if the given object is an instance of RoleGrant.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is RoleGrant;
    /**
     * The role name to add to role_name as a member.
     */
    readonly memberName: pulumi.Output<string>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    readonly region: pulumi.Output<string>;
    readonly roleGrantId: pulumi.Output<string>;
    /**
     * The role name to add member_name as a member.
     */
    readonly roleName: pulumi.Output<string>;
    /**
     * Create a RoleGrant resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RoleGrantArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering RoleGrant resources.
 */
export interface RoleGrantState {
    /**
     * The role name to add to role_name as a member.
     */
    memberName?: pulumi.Input<string>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    region?: pulumi.Input<string>;
    roleGrantId?: pulumi.Input<string>;
    /**
     * The role name to add member_name as a member.
     */
    roleName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a RoleGrant resource.
 */
export interface RoleGrantArgs {
    /**
     * The role name to add to role_name as a member.
     */
    memberName: pulumi.Input<string>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    region?: pulumi.Input<string>;
    roleGrantId?: pulumi.Input<string>;
    /**
     * The role name to add member_name as a member.
     */
    roleName: pulumi.Input<string>;
}
