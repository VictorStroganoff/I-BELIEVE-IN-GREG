ServerEvents.recipes(event => {
  event.shaped('gtceu:ulv_input_hatch', [
    ' A ',
    ' B ',
    ' C '
  ], {
    A: 'minecraft:glass',
    B: 'gtceu:sticky_resin',
    C: 'gtceu:ulv_machine_hull'
  });
    event.shaped('gtceu:ulv_output_hatch', [
    ' A ',
    ' B ',
    ' C '
  ], {
    A: 'gtceu:ulv_machine_hull',
    B: 'gtceu:sticky_resin',
    C: 'minecraft:glass'
  });
  event.shaped('gtceu:ulv_input_bus', [
    ' A ',
    ' B ',
    ' C '
  ], {
    A: 'minecraft:chest',
    B: 'gtceu:sticky_resin',
    C: 'gtceu:ulv_machine_hull'
  });
    event.shaped('gtceu:ulv_output_bus', [
    ' A ',
    ' B ',
    ' C '
  ], {
    A: 'gtceu:ulv_machine_hull',
    B: 'gtceu:sticky_resin',
    C: 'minecraft:chest'
  });
  event.shaped('gtceu:steam_fluid_solidifier', [
    'ABA',
    'CDC',
    'ABA'
  ], {
    A: 'gtceu:steel_firebox_casing',
    B: 'gtceu:steel_gear',
    C: 'gtceu:steel_pipe_casing',
    D: 'minecraft:hopper'
  });
  event.shaped('gtceu:heating_basin', [
    'ABA',
    'CDC',
    'ABA'
  ], {
    A: 'gtceu:steel_firebox_casing',
    B: 'gtceu:steel_huge_fluid_pipe',
    C: 'gtceu:steel_pipe_casing',
    D: 'gtceu:hp_steam_solid_boiler'
  });
event.remove( {output:'gtceu:cleanroom'});
  event.shaped('gtceu:cleanroom', [
    'AAA',
    'BCB',
    'DED'
  ], {
    A: 'gtceu:item_filter',
    B: 'gtceu:dural_rotor',
    C: 'gtceu:mv_machine_hull',
    D: 'gtceu:mv_electric_motor',
	E: '#gtceu:circuits/mv'
  });
  event.shaped('gtceu:compression_chamber', [
    'AAA',
    'BCB',
    'DED'
  ], {
    A: 'gtceu:mv_electric_pump',
    B: 'gtceu:dural_huge_fluid_pipe',
    C: 'gtceu:mv_machine_hull',
    D: 'gtceu:steel_pipe_casing',
	E: '#gtceu:circuits/hv'
  });
  event.remove( {output:'gtceu:vacuum_freezer'});
  event.shaped('gtceu:vacuum_freezer', [
    'AAA',
    'BCB',
    'DBD'
  ], {
    A: 'gtceu:mv_electric_pump',
    B: '#gtceu:circuits/ev',
    C: 'gtceu:frostproof_machine_casing',
    D: 'gtceu:gold_single_cable'
  });
});
